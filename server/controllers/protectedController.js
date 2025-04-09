export const getProtectedData = (req, res) => {
    // Example protected data
    const protectedData = {
        message: "This is protected data",
        user: req.user
    };

    res.status(200).json(protectedData);
};