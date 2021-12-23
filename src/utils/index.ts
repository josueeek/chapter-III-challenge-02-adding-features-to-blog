// import { format } from 'date-fns';
// import ptBR from 'date-fns/locale/pt-BR';

// export function formatDate(date: string, withTime = false) {
//   return format(
//     new Date(date),
//     withTime ? "dd MMM yyyy' às 'HH:mm'" : 'dd MMM yyyy',
//     {
//       locale: ptBR,
//     }
//   );
// }


// lines (7 sloc)  196 Bytes

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDate(date: string, withTime = false) {
  return format(new Date(date), withTime ? "dd MMM yyyy' às 'HH:mm'" : 'dd MMM yyyy', {
    locale: ptBR,
  });
}
