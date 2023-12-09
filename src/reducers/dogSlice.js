import { createSlice } from '@reduxjs/toolkit';

const mockupDogs = [
  {
    id: 1,
    name: 'Max',
    age: 3,
    adoptionFee: 100,
    information: `Max, a delightful three-year-old Shiba Inu, 
    is in search of a new loving home. 
    His vibrant red coat and spirited personality make him 
    a standout companion. Max thrives on social interactions 
    and is quick to form strong bonds with those around him. 
    With a love for outdoor adventures and a well-groomed appearance, 
    Max is ready to bring joy and companionship to a caring family. 
    If you're looking for a charismatic canine friend, consider making 
    Max a cherished member of your home`,
    breed: 'Shiba Inu',
    category: 'medium',
    picture: 'ShibaInu-Max.jpg', 
  },
  {
    id: 2,
    name: 'Rocky',
    age: 2,
    adoptionFee: 80,
    information: `Rocky, a charismatic two-year-old Chihuahua, 
    is on the lookout for a loving forever home. 
    With his compact size and endearing personality, 
    Rocky is an ideal companion for those seeking a pint-sized friend. 
    Despite his small stature, Rocky is big on personality—playful, 
    affectionate, and ready to steal your heart. 
    Whether you're looking for a cuddle buddy or a playful partner, 
    Rocky is the perfect match.`,
    breed: 'Chihuahua',
    category: 'small',
    picture: 'Chihuahua-Rocky.jpg',
  },
  {
    id: 3,
    name: 'Daisy',
    age: 3,
    adoptionFee: 100,
    information: `Daisy, a delightful ball of fur, 
    is a charming soul with a heart full of love. 
    Daisy exudes warmth and affection, 
    making her the perfect addition to any loving home. 
    Her fluffy coat and sparkling eyes add to her 
    undeniable cuteness, while her gentle demeanor and 
    playful spirit bring joy to every moment. 
    Daisy thrives on companionship and is eager to 
    create lasting bonds with her new family. 
    If you're ready to welcome a bundle of joy 
    into your life, Daisy is eagerly awaiting the 
    opportunity to bloom in a home filled with love 
    and laughter.`,
    breed: 'Pomeranian',
    category: 'small',
    picture: 'Pomeranian-Daisy.jpg', 
  },
  {
    id: 4,
    name: 'Bella',
    age: 1,
    adoptionFee: 150,
    information: `Bella, at the tender age of one, 
    is a golden ball of joy seeking a loving home. 
    With her luscious golden coat and expressive eyes, 
    Bella radiates warmth and charm. Energetic and 
    playful, she's the ideal companion for an active 
    household ready for adventures and long walks. 
    Bella's friendly disposition and quick-to-learn 
    nature make her a delightful addition to any family. `,
    breed: 'Golden Retriever',
    category: 'large',
    picture: 'Golden-Retriever-Bella.jpg',
  },
  {
    id: 5,
    name: 'Charlie',
    age: 5,
    adoptionFee: 80,
    information: `Charlie, is a wise and devoted Labrador. He is in search of a loving forever home. 
    With his sleek coat and soulful eyes, Charlie exudes both charm and wisdom. 
    Known for his loyalty and gentle nature, he's the perfect companion for those seeking 
    a steadfast friend. Charlie has mastered the art of companionship and is well-versed 
    in the joys of playtime and leisurely strolls. `,
    breed: 'Labrador',
    category: 'large',
    picture: 'Labrador-Charlie.jpg', 
  },
  {
    id: 6,
    name: 'Luna',
    age: 2,
    adoptionFee: 100,
    information: `Luna is eagerly seeking a forever home filled with love and laughter. 
    With her expressive eyes and silky coat, 
    Luna is a vision of charm and warmth. 
    Playful and full of energy, she's the perfect 
    companion for those who enjoy fun-filled activities 
    and affectionate moments. Luna, at the prime age of two, 
    is ready to embark on new adventures with a caring family.`,
    breed: 'Cocker-Spaniel',
    category: 'medium',
    picture: 'Cocker-Spaniel-Luna.jpg',
  },
  {
    id: 7,
    name: 'Chanel',
    age: 2,
    adoptionFee: 80,
    information: `Chanel, a petite and playful 2-year-old Chihuahua, 
    is searching for a caring family. 
    With her sleek coat and charming personality, 
    she's a delightful companion ready to bring joy 
    to your home. If you're looking for a pint-sized 
    friend with a lot of love to give, consider 
    making Chanel a cherished member of your family.`,
    breed: 'Labrador',
    category: 'small',
    picture: 'Chihuahua-chanel.jpg', 
  },
  {
    id: 8,
    name: 'Buddy',
    age: 6,
    adoptionFee: 100,
    information: `Meet Buddy, a calm and loving 6-year-old Golden Retriever 
    in search of a forever family. With his golden 
    coat and gentle demeanor, Buddy is the perfect 
    companion for a home filled with warmth and care. 
    If you're ready for a loyal friend, 
    Buddy is eager to share his affection and 
    bring joy to your life`,
    breed: 'Cocker-Spaniel',
    category: 'large',
    picture: 'Golden-Retriever-Buddy.jpg',
  },
];

const dogSlice = createSlice({
  name: 'dog',
  initialState: {
    dogs: mockupDogs,
  },

  reducers: {
    submitForm: (state, action) => {
      // Extract information from the action payload
      const { name, age, adoptionFee, information, breed, category, picture, } = action.payload;

      // Create a new dog object with the provided information and the next id
      const newDog = {
        id: state.dogs.length + 1, //Auto-increment ID based on the length of the current list
        name,
        age,
        adoptionFee,
        information,
        breed,
        category,
        picture,
      };

      // Update the state by adding the new dog to the list
      state.dogs.push(newDog);

      // Save the updated dogs list to localStorage
      localStorage.setItem('dogs', JSON.stringify(state.dogs));
    },
  },
});

export const { submitForm } = dogSlice.actions;
export default dogSlice.reducer;





