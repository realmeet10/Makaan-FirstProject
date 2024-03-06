import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, resp) => {
    console.log("Creating a user");

    let { email } = req.body;

    const userExists = await prisma.user.findUnique({ where: { email: email } });
    if (!userExists) {
        const user = await prisma.user.create({ data: req.body });
        resp.send({
            message: "User registered successfully",
            user: user,
        });
    } else resp.status(201).send({ message: "User already registered" });
});

// functtion to book a visit to resd

export const bookVisit = asyncHandler(async (req, resp) => {

    const { email, date } = req.body
    const { id } = req.params

    try {

        const alreadyBooked = await prisma.user.findUnique({
            where: { email },
            select: { bookedVisits: true }
        })

        if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
            resp.status(400).json({ message: "This residency is already booked by you " })
        } else {
            await prisma.user.update({
                where: { email: email },
                data: {
                    bookedVisits: { push: { id, date } }
                }
            });
            resp.send("your visit is booked successfully");
        }

    } catch (err) {
        throw new Error(err.message)
    }

});

// function to get all bookings of user
export const getAllBookings = asyncHandler(async (req, resp) => {
    const { email } = req.body

    try {
        const bookings = await prisma.user.findUnique({
            where: { email },
            select: { bookedVisits: true }
        })
        resp.status(200).send(bookings)
    } catch (err) {
        throw new Error(err.message)
    }
});

// function to cancel to booking

export const cancelBooking = asyncHandler(async (req, resp) => {

    const { email } = req.body;
    const { id } = req.params;

    try {

        const user = await prisma.user.findUnique({
            where: { email: email },
            select: { bookedVisits: true }
        })

        const index = user.bookedVisits.findIndex((visit) => visit.id === id)

        if (index === -1) {
            resp.status(404).json({ message: "Booking not Found" })
        } else {
            user.bookedVisits.splice(index, 1)
            await prisma.user.update({
                where: { email },
                data: {
                    bookedVisits: user.bookedVisits
                }
            })
            resp.send("Booking Cancel Successfully...")
        }
    } catch (err) {
        throw new Error(err.message);
    }

});

// function to add  a read in favourite list of a user

export const toFav = asyncHandler(async (req, resp) => {
    const { email } = req.body;
    const { rid } = req.params;

    try {

        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (user.favResidenciesID.includes(rid)) {
            const updateUser = await prisma.user.update({
                where: { email },
                data: {
                    favResidenciesID: {
                        set: user.favResidenciesID.filter((id) => id !== rid)
                    }
                }
            });
            resp.send({ message: "Removed from favourite", user: updateUser });
        } else {
            const updateUser = await prisma.user.update({
                where: { email },
                data: {
                    favResidenciesID: {
                        push: rid
                    }
                }
            });
            resp.send({ message: "Updated favourites", user: updateUser });
        }

    } catch (err) {
        throw new Error(err.message);

    }
});

// function to get all favourites

export const allFavList = asyncHandler(async (req, resp) => {
    const { email } = req.body

    try {

        const favResd = await prisma.user.findUnique({
            where: { email },
            select: { favResidenciesID: true }
        })
        resp.status(200).send(favResd);
    } catch (err) {
        throw new Error(err.message)
    }
})