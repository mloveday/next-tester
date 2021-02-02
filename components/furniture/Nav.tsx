export const Nav: React.FC = () => <nav className='flex align-center justify-center w-full max-w-6xl mx-auto'>
    <ul className='grid gap-4 grid-cols-8 w-full'>
        {['Foo', 'Bar', 'Baz'].map(content =>
          <li key={content} className='flex align-center justify-center p-2 border'>{content}</li>
        )}
    </ul>
</nav>;