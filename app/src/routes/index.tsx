import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <span>here is the index</span>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'oneconstellation',
  meta: [
    {
      name: 'description',
      content: 'oneconstellation collective space',
    },
  ],
};
