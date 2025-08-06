import { io } from "socket.io-client";

const Api = import.meta.env.VITE_SOCKET_URL;

const socket = io( Api , {
    autoConnect : false
 });

 socket.on('connect' , () => {
    console.log('socket connected')
 })


export default socket