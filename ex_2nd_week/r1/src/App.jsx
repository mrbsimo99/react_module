import { useState } from 'react';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import LoginForm from './components/LoginForm';
import UncontrolledInput from './components/UncontrolledInput';
import ItemList from './components/ItemList';
import Card from './components/Card';

const App = () => {

  const color = ['Red', 'Green', 'Blue', 'Yellow', 'Black'];
  const fruit = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Mango'];


  return (
    <>
      <Counter />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />

      <div>
        <h2>Colors</h2>
        <ItemList array={color} />
      </div>

      <div>
        <h2>Fruits</h2>
        <ItemList array={fruit} />
      </div>
      <Card>
        <h3>Il mio titolo</h3>
        <p>Lorem ipsum dolor sit.</p>
      </Card>
    </>
  )
}

export default App;
