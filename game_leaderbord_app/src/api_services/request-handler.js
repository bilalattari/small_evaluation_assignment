import { del, get, patch, post, put } from "./http-provider";

export const SERVICE_URLS = {

    // Common Management
    uploadImage: "upload",
    uploadMultipleImages: "upload",
    deleteImage: "upload?imageUrl=",

    // Auth Management
    login: "auth/login",
    googleLogin: "auth/socialLogin",
    register: "auth/register",
    registerVendor: "users/vendor/create",
    forgetPassword: "auth/forgot-password",
    verifyOtp: "auth/verify-otp",
    resetPassword: "auth/reset-password",
    getUserDetail: "auth/me",
    updateUser: "users/me",
    changePassword: "auth/update-password",
    deleteUser:"users",

    //Category Management
    getCategories: "category",

    //Service Management
    service: "service",
    editService: "service/",

    //Vendor Management
    getTopVendors: "users/top-vendors",
    getCategoryVendors: "users/vendors?category=",
    getFeaturedVendors: "users/vendors?featured=true",
    getVendorDetails: "users/vendors/",

    //Booking Management
    getVendorBookings: "booking/vendor?filter=",
    getDateVendorBookings: "booking/vendor?bookingDate=",
    getCustomerBookings: "booking/customer?filter=",
    getDateCustomerBookings: "booking/customer?bookingDate=",
    getAvailableSlots: "booking/available-slots/",
    createBooking: "booking",
    cancelBooking: "booking/cancel/",
    createPayment: "payment/create",

    //Chat Management
    getChats: "chat",
    getMessages: "message?chatId=",
    contactUs: "contact-us",


    //Notifications
    getNotifications: "notifications",
    markRead: "notifications/mark-read",

};

// Common Managemnt
const uploadImage = (data) => post(SERVICE_URLS.uploadImage, data, true);
const uploadMultipleImages = (data) => post(SERVICE_URLS.uploadMultipleImages, data, true);
const deleteImage = (data) => post(SERVICE_URLS.deleteImage, data);

//Auth Management
const login = data => post(SERVICE_URLS.login, data);
const googleLogin = data => post(SERVICE_URLS.googleLogin, data);
const register = data => post(SERVICE_URLS.register, data);
const registerVendor = data => post(SERVICE_URLS.registerVendor, data, true);
const forgetPassword = data => post(SERVICE_URLS.forgetPassword, data);
const verifyOtp = data => post(SERVICE_URLS.verifyOtp, data);
const resetPassword = data => post(SERVICE_URLS.resetPassword, data);
const getUserDetail = () => get(SERVICE_URLS.getUserDetail);
const updateUser = data => put(SERVICE_URLS.updateUser, data);
const changePassword = data => post(SERVICE_URLS.changePassword, data);
const deleteUser = () => del(SERVICE_URLS.deleteUser);

// Category Management
const getCategories = () => get(SERVICE_URLS.getCategories);

//Service Management
const getServices = (params) => get(SERVICE_URLS.service + `?vendor=${params}`);
const createService = data => post(SERVICE_URLS.service, data);
const editService = data => put(SERVICE_URLS.editService + data?._id, data);
const deleteService = params => del(SERVICE_URLS.editService + params);

//Vendor Management
const getTopVendors = () => get(SERVICE_URLS.getTopVendors);
const getFeaturedVendors = () => get(SERVICE_URLS.getFeaturedVendors);
const getCategoryVendors = params => get(SERVICE_URLS.getCategoryVendors, params);
const getVendorDetails = params => get(SERVICE_URLS.getVendorDetails, params);


//Booking Management
const getVendorBookings = params => get(SERVICE_URLS.getVendorBookings + (params ?? ""));
const getCustomerBookings = params => get(SERVICE_URLS.getCustomerBookings + (params ?? ""));
const getVendorDateBookings = params => get(SERVICE_URLS.getDateVendorBookings + params);
const getCustomerDateBookings = params => get(SERVICE_URLS.getDateCustomerBookings + params);
const getAvailableSlots = params => get(`${SERVICE_URLS.getAvailableSlots}${params?.id}?date=${params?.date}`);
const createBooking = data => post(SERVICE_URLS.createBooking, data);
const cancelBooking = data => put(SERVICE_URLS.cancelBooking + data?._id, data);
const createPayment = data => post(SERVICE_URLS.createPayment, data);


//Chat Management
const getChats = () => get(SERVICE_URLS.getChats);
const createChat = data => post(SERVICE_URLS.getChats, data);
const getMessages = params => get(SERVICE_URLS.getMessages + params);
const contactUs = data => post(SERVICE_URLS.contactUs, data);


//Notification management

const getNotifications = () => get(SERVICE_URLS.getNotifications);
const markRead = () => patch(SERVICE_URLS.markRead);



const apiServices = {

    //Common Management
    uploadImage,
    uploadMultipleImages,
    deleteImage,

    // Auth Management
    login,
    googleLogin,
    register,
    registerVendor,
    forgetPassword,
    verifyOtp,
    resetPassword,
    getUserDetail,
    updateUser,
    changePassword,
    deleteUser,

    //Category Management
    getCategories,

    //Service Management
    getServices,
    createService,
    editService,
    deleteService,

    //Vendor Management
    getTopVendors,
    getFeaturedVendors,
    getCategoryVendors,
    getVendorDetails,


    //Booking Management
    getVendorBookings,
    getVendorDateBookings,
    getAvailableSlots,
    getCustomerBookings,
    getCustomerDateBookings,
    createBooking,
    cancelBooking,
    createPayment,

    //Chat Management
    getChats,
    createChat,
    getMessages,
    contactUs,

    //Notification Management
    getNotifications,
    markRead


};

export default apiServices;
