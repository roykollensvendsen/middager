import { defineCollection, z } from 'astro:content';

const oppskrifter = defineCollection({
  type: 'content',
  schema: z.object({
    tittel: z.string(),
    beskrivelse: z.string(),
    bilde: z.string().optional(),
    porsjoner: z.number(),
    tid_min: z.number(),
    vanskelighet: z.enum(['enkel', 'middels', 'avansert']),
    tagger: z.array(z.string()).default([]),
    dato_lagt_til: z.string(),
    ingredienser: z.array(
      z.object({
        navn: z.string(),
        mengde: z.string().optional(),
        enhet: z.string().optional(),
        gruppe: z.string().optional(),
        notat: z.string().optional(),
      })
    ),
    handleliste: z.array(
      z.object({
        vare: z.string(),
        mengde: z.string(),
        butikk: z.enum(['Meny', 'Rema 1000', 'Kiwi', 'Hvilken som helst']),
        ca_pris_nok: z.number().optional(),
        notat: z.string().optional(),
      })
    ),
  }),
});

export const collections = { oppskrifter };
