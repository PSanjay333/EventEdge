const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoDB = require("./db");
const users = require("./models/UserModel");
const listofevents = require("./models/Events");
const userevents = require("./models/UserRegistrations");
const middleware = require("./middleware");
const bcrypt = require("bcrypt"); // Import bcrypt
const saltRounds = 10; // Number of salt rounds for bcrypt

const app = express();
const port = 5000;
mongoDB();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(cors({ 
  origin: "*" ,
}));


app.get("/", async (req, res) => {
  res.send("Hello World!");
});
app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User Not Exist, Please SignUp" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    let payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, "jwtPassword", { expiresIn: 360000000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});


app.post("/signup", async (req, res) => {
  try {
    const { username, email, mobile, password, confirmpassword, bio, profile } =
      req.body;
    const exist = await users.findOne({ email });
    if (exist) {
      return res.status(400).send("User Already Registered");
    }

    if (password !== confirmpassword) {
      return res.status(400).send("Password Invalid");
    }

    const hashedPassword1 = await bcrypt.hash(password, saltRounds);
    const hashedPassword2 = await bcrypt.hash(confirmpassword, saltRounds);

    let newUser = new users({
      username,
      email,
      mobile,
      password: hashedPassword1,
      confirmpassword: hashedPassword2,
      bio,
      profile,
    });

    newUser.save()
      .then(() => {
        return res.json({ message: "SignUp Successful" });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
      });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server Error");
  }
});




app.get("/Events", middleware, async (req, res) => {
  try {
    let allEvents = await listofevents.find();
    return res.json(allEvents);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

app.get("/myprofile", middleware, async (req, res) => {
  try {
    let user = await users.findById(req.user.id);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error");
  }
});

  app.post("/createEvent", middleware, async (req, res) => {
    try {
      console.log("Received create event request");
      const user = await users.findById(req.user.id);
      const {
        title,
        date,
        time,
        location,
        description,
        organizer,
        city,
        state,
        image,
      } = req.body;
      const email = user.email;
      const user_id = user.id;
      const newEvent = new listofevents({
        email,
        user_id,
        title,
        date,
        time,
        location,
        description,
        organizer,
        image,
        city,
        state,
      });

      await newEvent.save();

      return res.status(200).json({ message: "Event created successfully" });
    } catch (err) {
      console.error(err); // Log the error
      return res.status(500).send("Server Error");
    }
  });

app.put("/update", middleware, async (req, res) => {
  try {
    // console.log("Update request received:", req.body);
    const user = await users.findById(req.user.id);
    // console.log(req.user.id)
    // console.log(user)
    if (user) {
      if (req.body.username) {
        user.username = req.body.username || user.name;
      }
      if (req.body.email) {
        user.email = req.body.email || user.email;
      }
      if (req.body.password) {
        user.password = req.body.password || user.password;
      }
      if (req.body.mobile) {
        user.mobile = req.body.mobile || user.mobile;
      }
      if (req.body.bio) {
        user.bio = req.body.bio || user.bio;
      }
      if (req.body.profile) {
        user.profile = req.body.profile || user.profile;
      }
    }

    if (user) {
      const UpdatedUser = await user.save();
      // console.log(user)
      res.json({
        id: UpdatedUser.id,
        username: UpdatedUser.username,
        email: UpdatedUser.email,
        password: UpdatedUser.password,
        mobile: UpdatedUser.mobile,
        bio: UpdatedUser.bio,
        profile: UpdatedUser.profile,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

app.get("/myevents", middleware, async (req, res) => {
  try {
    const user = await users.findById(req.user.id);
    const events = await listofevents.find({ user_id: user.id });
    // console.log(events);
    res.json({ allEvents: events });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});


app.get("/regEvents", middleware, async (req, res) => {
  try {
    const user = await users.findById(req.user.id);
    const registeredEvents = await userevents.find({ user_id: user.id });

    // Extract event_ids from the registeredEvents array
    const eventIds = registeredEvents.map((event) => event.event_id);

    // Use the event_ids to fetch the corresponding events
    const events = await listofevents.find({ _id: { $in: eventIds } });

    res.json({ registeredEvents: events });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

app.put("/edit", middleware, async (req, res) => {
  try {
    console.log("Event update request got")
    const event = await listofevents.findById(req.body.event_id);

    if (event) {
      if (req.body.title) {
        event.title = req.body.title || event.title;
      }
      if (req.body.date) {
        event.date = req.body.date || event.date;
      }
      if (req.body.time) {
        event.time = req.body.time || event.time;
      }
      if (req.body.location) {
        event.location = req.body.location || event.location;
      }
      if (req.body.description) {
        event.description = req.body.description || event.description;
      }
      if (req.body.organizer) {
        event.organizer = req.body.organizer || event.organizer;
      }
      if (req.body.city) {
        event.city = req.body.city || event.city;
      }
      if (req.body.state) {
        event.state = req.body.state || event.state;
      }

      if (req.body.image) {
        event.image = req.body.image || event.image;
      }

      await event.save();
      res.json({ message: "Event updated successfully" });
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

app.post("/registered",middleware,async(req,res)=>{
  try{
    // console.log("user register code",req.user.id)
    const user = await users.findById(req.user.id);
    const user_id = user.id;
    // const user_email = user.email
    const event_id = req.query.event_id
    // console.log(user_id,event_id)

    const existingRegistration = await userevents.findOne({
      user_id: user_id,
      event_id: event_id,
    });

    if (existingRegistration) {
      return res.json({ message: "Already registered for this event" });
    }


    const NewEvent = new userevents({
      user_id,
      event_id,
    })

    await NewEvent.save();

    return res.status(200).json({ message: "Event Registered successfully" });

  }catch (err){
    console.error(err);
    return res.status(500).json({ message: "Server Error" }); 
  }
})


// app.delete("/delete", middleware, async (req, res) => {
//   try {
//     console.log(req.query.event_id);
//     const event = await listofevents.findById(req.query.event_id);
//     if (event) {
//       await event.deleteOne();
//       res.json({ message: "Event Deleted successfully" });
//     } else {
//       res.status(404).json({ message: "Event not found" });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Server Error" });
//   }
// });
app.delete("/delete", middleware, async (req, res) => {
  try {
    console.log(req.query.event_id);
    const eventId = req.query.event_id;
    const result = await listofevents.deleteOne({ _id: eventId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: "Event Deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});


app.delete("/deletereg", middleware, async (req, res) => {
  try {
    // console.log(req.query.event_id);
    const eventId = req.query.event_id;
    const user = await users.findById(req.user.id); 
    const result = await userevents.deleteOne({ user_id: user.id,event_id:eventId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: "Registration Cancelled" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
