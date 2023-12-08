import './App.css';
import { Fragment } from 'react';
import Header from './componunts/Header';
import MainContent from './componunts/MainContent';
import Cardsection from './componunts/Cardsection';
import Seecar_section from './componunts/seecar_section';
import Carview_sec from './componunts/Carview_sec';
import Footer from './componunts/Footer';
import Button from './componunts/Button';





const App = () => {
  return (
    <Fragment>
      <Header />
      <MainContent />
      <div className='container'>
      <Button/>
        <div className='is-flex'>
          <Cardsection
            title="Tesla Model 3"
            imgurl="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
          <Cardsection
            title="Ford Mustang 2023"
            imgurl="https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
          <Cardsection
            title="Porche 911"
            imgurl="https://wallpapercave.com/wp/wp11610492.jpg"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
          <Cardsection
            title="McLaren Senna"
            imgurl="https://wallpapercave.com/wp/wp2575772.jpg"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
          <Cardsection
            title="BMW SUV"
            imgurl="https://images.unsplash.com/photo-1615908397724-6dc711db34a7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
          <Cardsection
            title="Lamborghini Urus"
            imgurl="https://images.unsplash.com/photo-1641653493287-60ccf4064bab?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
          <Cardsection
            title="Range Rover Vogue P400e"
            imgurl="https://images.unsplash.com/photo-1549632891-a0bea6d0355b?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
          <Cardsection
            title="Mercedes AMG Brabus"
            imgurl="https://images.unsplash.com/photo-1666365059577-e385e3fd31cf?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
          <Cardsection
            title="Audi R8"
            imgurl="https://images.unsplash.com/photo-1623659249629-32fe9faf8b58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
          <Cardsection
            title="Dodge Challanger"
            imgurl="https://images.unsplash.com/photo-1506560411-58ae1f86da62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
          <Cardsection
            title="Rolls Royce"
            imgurl="https://wallpapercave.com/wp/wp11866647.jpg"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
          <Cardsection
            title="Toyota Crown 2023"
            imgurl="https://wallpapercave.com/wp/wp11405445.jpg"
            body=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed veritatis facere aperiam veniam! Rerum exercitationem assumenda, nulla quae, repudiandae omnis blanditiis qui nemo quam accusamus odit aspernatur cupiditate unde?" />
        </div>
      </div>
        <Seecar_section/>
      <Carview_sec/>
      <Footer/>
    </Fragment>
  );
}

export default App;
