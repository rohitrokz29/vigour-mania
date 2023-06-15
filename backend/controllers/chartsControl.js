const User = require('../models/user.model')

const AddChart = async (req, res) => {
    // adding first time chart to a user account
    try {
        const chartRes = await User.addChart({ body: req.body, _id: req._id });
        console.log(chartRes)
        res.status(200).json(chartRes)
    } catch (error) {
        res.status(500).json(error)
    }

}
const GetCharts = async (req, res) => {
    try {
        const result = await User.getCharts(req)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}
const GetOneChart = async (req, res) => {
    try {
        const { chartId } = req.params
        const result = await User.getOneChart({ _id: req._id, chartId });
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json(error);
    }
}
const UpdateCharts = async (req, res) => {
    //Update chart details
    try {
        const isUpdated = await User.updateChart({ body: req.body, _id: req._id });
        res.status(200).json(isUpdated)
    } catch (error) {
        res.status(500).json(error)
    }
}

const DeleteChart = async (req, res) => {
    try {
        const { chartId } = req.params
        const isDeleted = await User.deleteChart({ _id: req._id, chartId })
        res.status(200).json(isDeleted)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {
    AddChart,
    GetCharts,
    UpdateCharts,
    DeleteChart,
    GetOneChart
};