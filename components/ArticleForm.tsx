import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, author }),
    });
    if (response.ok) {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
      <TextField label="Content" value={content} onChange={(e) => setContent(e.target.value)} fullWidth multiline rows={4} />
      <TextField label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} fullWidth />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default ArticleForm;
