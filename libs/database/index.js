import QueryModel from './query.js'

import user from './models/user.js'
import room from './models/room.js'
import movie from './models/movie.js'
import booking from './models/booking.js'
import screening from './models/screening.js'

const userModel = new QueryModel(user);
const roomModel = new QueryModel(room);
const movieModel = new QueryModel(movie);
const bookingModel = new QueryModel(booking);
const screeningModel = new QueryModel(screening);

export {userModel, roomModel, movieModel, bookingModel, screeningModel}
