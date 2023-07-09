import React,{useState} from "react";






const Contact = () => {

const [name,setName] = useState("initial")

  return (

    
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Name" onChange={(e) => setName(e.target.value)}/>
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="Abc@xyz.com" />
          </div>
          <div>
            <label className = "message">Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>

          <button type="submit" onClick={()=> console.log(name)}>Send</button>
          <p>{name}</p>
        </form>
      </main>
    </div>
  );
};

export default Contact;
