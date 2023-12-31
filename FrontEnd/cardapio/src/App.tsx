import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/crate-modal';
import axios from 'axios';



function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  };

  const handleRemoveFood = async  (id: number) => {
    try{

      await axios.delete(`http://localhost:8080/food/${id}`)
      window.location.reload();

    } catch (error) {
      console.error('Erro ao remover comida', error);
    }
      
  };

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData => 
          <Card
            id={foodData.id}
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
            onRemove={() => handleRemoveFood(foodData.id)}
          />
        )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App