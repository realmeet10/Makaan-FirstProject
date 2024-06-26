import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, resp) => {
    const {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        userEmail,
    } = req.body.data


    try {
        const residency = await prisma.residency.create({
            data: {
                title,
                description,
                price,
                address,
                country,
                city,
                facilities,
                image,
                owner: { connect: { email: userEmail } },
            },
        });

        resp.send({ message: "Residency created successfully", residency })
    } catch (err) {
        if (err.code === "P2002") {
            throw new Error("A residency with address already created");
        }
        throw new Error(err.message);
    }
});
// function to get all the documents/residency
export const getAllResidencies = asyncHandler(async (req, resp) => {
    try {
        const residencies = await prisma.residency.findMany({
            orderBy: {
                creactedAt: "desc"
            },
        });
        resp.send(residencies)
    } catch (err) {
        throw new Error(err.message);
    }

});

// function to get a specific document/residency

export const getResidency = asyncHandler(async (req, resp) => {
    const { id } = req.params;

    try {

        const residency = await prisma.residency.findUnique({
            where: { id }
        });
        resp.send(residency);

    } catch (err) {
        throw new Error(err.message);
    }
})


