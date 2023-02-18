const TeachableMachine = require("@sashido/teachablemachine-node");

export default async function handler(req, res) {
    try {
        const { img } = req.query;
        const model = new TeachableMachine({
            modelUrl: "https://teachablemachine.withgoogle.com/models/6iVc1YHeS/"
        });

        const predictions = await model.classify({
            imageUrl: img,
        })

        res.status(200).json({ predictions: predictions[0] })
    } catch (error) {
        console.log(error)
        res.status(200).json({ error })
    }

}
