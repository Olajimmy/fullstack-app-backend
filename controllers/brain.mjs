import Brain from "../models/brain.mjs";

async function seed(req, res) {
  const TODAY = new Date();
  try {
    await Brain.create([
      {
        user: "dave",
        entryDate: TODAY,
        entryType: "Idea",
        description: "i do not have ideas",
      },
      {
        user: "Ade",
        entryDate: TODAY,
        entryType: "Idea",
        description: "i do not have ideas",
      },
      {
        user: "sola",
        entryDate: TODAY,
        entryType: "Idea",
        description: "i do not have ideas",
      },
      {
        user: "Oladele",
        entryDate: TODAY,
        entryType: "Idea",
        description: "i do not have ideas",
      },
    ]);
    res.send("success").status(200);
  } catch (err) {
    res.send(err).status(400);
  }
}

const getEntries = async (req, res) => {
  try {
    const foundEntries = await Brain.find({});
    res.status(200).json(foundEntries);
  } catch (err) {
    res.send(err).status(400);
  }
};

const addEntry = async (req, res) => {
  console.log(`body: `, req.body);
  try {
    const createdEntry = await Brain.create(req.body);
    console.log("createdEntry", createdEntry);
    res.status(200).json(createdEntry);
    // console.log('in addEntry');
    // res.send('added').status(400)
  } catch (err) {
    res.send(err).status(400);
  }
};

const deleteEntry = async (req, res) => {
  console.log(`deleting`);
  try {
    const deletedEntry = await Brain.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedEntry);
  } catch (err) {
    res.send(err).status(400);
  }
};

const editEntry = async (req, res) => {
  console.log("editing");
  try {
    const editedEntry = await Brain.findByIdAndUpdate(req.params.id);
    res.status(200).json(editedEntry);
  } catch (err) {
    res.send(err).status(400);
  }
};
export default { seed, getEntries, addEntry, deleteEntry, editEntry };
