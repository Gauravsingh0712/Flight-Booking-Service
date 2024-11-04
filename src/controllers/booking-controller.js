const { BookingService } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { ErrorResponse, SuccessResponse } = require('../utils/common')

async function createBooking(req, res) {
    try {
        const airplane = await BookingService.createBooking({
            flightId: req.body.flightId,
            userId: req.body.userId,
            noofSeats: req.body.noofSeats
        });
        SuccessResponse.data = airplane
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse)
    }
}

module.exports = {
    createBooking
}