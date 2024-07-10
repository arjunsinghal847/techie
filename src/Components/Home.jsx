import React from 'react';
import vg from "../assets/2.webp";
import {AiFillAmazonCircle,AiFillGoogleCircle,
  AiFillYoutube,AiFillInstagram} 
from "react-icons/ai";
const Home = () => {
  return (
    <>
    <div className='home' id="home">Home
    <main>
        <h1>Techy Star</h1>
        <p>Solution to all your problems</p>
    </main>
    </div>


    <div className='home2'>
    <img src={vg} alt="Graphics" />
    <div>
      <p>
        HI! I am Arjun would be solving your tech problems here and assist you in your problems that you face every day
      </p>
    </div>

    </div>
    <div className="home3" id="about">
      <div>
        <h1>Who are we?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magnam dignissimos sapiente hic officiis, mollitia dicta est officia sint sit delectus dolor voluptas adipisci molestiae voluptatem non dolore cumque amet!
        Architecto possimus sint exercitationem, incidunt ipsa odio, corporis fugiat, odit illum cumque dolores! Incidunt consequatur pariatur illo doloremque, odio, aperiam nobis sunt repudiandae recusandae distinctio corrupti, dolorum excepturi ipsa sed.
        A explicabo omnis velit aliquam sunt aliquid. Accusantium repellendus impedit quisquam ullam nam nesciunt quam fugiat eaque possimus cumque, maiores consectetur deserunt est beatae ipsum autem porro repellat rem aspernatur!
        Repellat ea magni facilis illo velit, fuga molestiae voluptas eaque dolore eligendi asperiores animi reiciendis fugiat ducimus veniam ratione maiores nostrum? Aut ducimus delectus tempora numquam ipsum voluptatibus ab asperiores.
        Quo animi alias nihil veritatis, aliquam libero blanditiis nobis pariatur maiores omnis culpa explicabo laborum minima obcaecati quam qui, nisi, autem vero tempore velit itaque laboriosam illum. Quasi, quidem iusto.</p>
      </div>
    </div>
    <div className="home4" id="brands">
      <div>
        <h1>
          Brands
        </h1>
        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div style={{
            animationDelay:"0.5s",
          }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div style={{
            animationDelay:"0.7s",
          }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

          <div style={{
            animationDelay:"1s",
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>

        </article>
      </div>
    </div>
    </>
  )
}

export default Home