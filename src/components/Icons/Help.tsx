import * as React from 'react';

export default function Help({ ...props }: {}) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <path d="M14.601 21.5a2.498 2.498 0 1 1-4.998 0c0-1.38 1.121-2.5 2.499-2.5a2.497 2.497 0 0 1 2.499 2.5zM12.181 0c-4.029 0-7.06 2.693-7.06 8h3.955c0-2.304.906-4.189 3.024-4.189 1.247 0 2.57.828 2.684 2.411.123 1.666-.767 2.511-1.892 3.582-2.924 2.78-2.816 4.049-2.816 7.196h3.943c0-1.452-.157-2.508 1.838-4.659 1.331-1.436 2.986-3.222 3.021-5.943C18.925 2.435 16.127 0 12.181 0z" />
    </svg>
  )
}
