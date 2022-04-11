import { useEffect } from 'react';

function Component({ name }: { name: string }) {
  if (name) {
    useEffect(() => {
      alert('wrong');
    });
  }
}

export default Component;
