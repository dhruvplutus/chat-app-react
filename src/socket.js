import { io } from "socket.io-client";
export const socket = io("http://localhost:2000", { transports: ['websocket'], upgrade: false });
