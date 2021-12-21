import React from 'react'
import Card from './Card'

const CardSection = () => (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <Card cardTitle="Card 1" btnText="Apple"
          cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          
          />
          <Card cardTitle="Card 2" btnText="Mango"
          cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          
          />
          <Card cardTitle="Card 3" btnText="Banana"
          cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          
          />
        </div>
      </div>
    </section>
)
export default CardSection

