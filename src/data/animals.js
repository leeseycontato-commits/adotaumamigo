// `apiBreed` é o identificador usado na Dog CEO API (cães) ou na The Cat API (gatos)
export const animals = [
  { id: 1, name: 'Bolinha', type: 'Cão', breed: 'Labrador', apiBreed: 'labrador', age: '2 anos', sex: 'Macho', location: 'Lisboa', description: 'Brincalhão e muito meigo, adora correr atrás de bolas e dar passeios longos.' },
  { id: 2, name: 'Luna', type: 'Gato', breed: 'Siamês', apiBreed: 'siam', age: '1 ano', sex: 'Fêmea', location: 'Porto', description: 'Curiosa e conversadora, procura uma família tranquila com muito colo.' },
  { id: 3, name: 'Thor', type: 'Cão', breed: 'Pastor Alemão', apiBreed: 'germanshepherd', age: '4 anos', sex: 'Macho', location: 'Coimbra', description: 'Leal e protetor, ideal para casas com quintal e tutores ativos.' },
  { id: 4, name: 'Mia', type: 'Gato', breed: 'Persa', apiBreed: 'pers', age: '3 anos', sex: 'Fêmea', location: 'Lisboa', description: 'Calma e elegante, gosta de dormir ao sol e de escovagens diárias.' },
  { id: 5, name: 'Pipoca', type: 'Cão', breed: 'Beagle', apiBreed: 'beagle', age: '1 ano', sex: 'Fêmea', location: 'Braga', description: 'Cheia de energia e com um faro incrível. Dá-se bem com crianças.' },
  { id: 6, name: 'Simba', type: 'Gato', breed: 'Maine Coon', apiBreed: 'mcoo', age: '2 anos', sex: 'Macho', location: 'Faro', description: 'Um gigante gentil, sociável com outros gatos e muito brincalhão.' },
  { id: 7, name: 'Max', type: 'Cão', breed: 'Golden Retriever', apiBreed: 'retriever/golden', age: '5 anos', sex: 'Macho', location: 'Porto', description: 'O melhor amigo que se pode ter: obediente, calmo e carinhoso.' },
  { id: 8, name: 'Nina', type: 'Gato', breed: 'Bengal', apiBreed: 'beng', age: '8 meses', sex: 'Fêmea', location: 'Coimbra', description: 'Aventureira e ágil, adora brinquedos interativos e arranhadores.' },
  { id: 9, name: 'Rex', type: 'Cão', breed: 'Husky', apiBreed: 'husky', age: '3 anos', sex: 'Macho', location: 'Lisboa', description: 'Independente e muito ativo, precisa de exercício diário e espaço.' },
  { id: 10, name: 'Mel', type: 'Cão', breed: 'Pug', apiBreed: 'pug', age: '6 anos', sex: 'Fêmea', location: 'Faro', description: 'Dorminhoca e afetuosa, perfeita para apartamento.' },
  { id: 11, name: 'Oliver', type: 'Gato', breed: 'Ragdoll', apiBreed: 'ragd', age: '4 anos', sex: 'Macho', location: 'Braga', description: 'Muito dócil, deixa-se pegar ao colo e segue os tutores pela casa.' },
  { id: 12, name: 'Kira', type: 'Cão', breed: 'Border Collie', apiBreed: 'collie/border', age: '2 anos', sex: 'Fêmea', location: 'Coimbra', description: 'Inteligentíssima, aprende truques num instante e adora desafios.' },
]

export const getAnimal = (id) => animals.find((a) => a.id === Number(id))
