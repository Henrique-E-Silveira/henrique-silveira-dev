# Datas automáticas no portfólio

## O que muda
- **Idade (topo da página):** calculada a partir do nascimento em 29/09/2007. Vira 20 sozinha em 29/09/2027, sem precisar editar nada.
- **"Anos estudando" (Habilidades):** contado a partir de 2023 (quando você começou com 16 anos). Hoje mostra "3+" e sobe sozinho a cada ano.
- **Ano no rodapé (©):** já atualiza sozinho; fica como está.
- O texto "Aos 16 anos, descobri..." fica igual, pois é um fato do passado.

## Detalhes técnicos
- Criar `src/lib/dates.ts` com `BIRTH_DATE = 2007-09-29`, `STUDY_START_YEAR = 2023`, `getAge(today)` (considera mês/dia) e `getYearsStudying(today)`.
- Usar `getAge()` em `hero.tsx` e `getYearsStudying()` em `skills.tsx`.
- Adicionar um teste pequeno: idade 19 em 28/09/2027, 20 em 29/09/2027; anos estudando = 3 em 2026.
