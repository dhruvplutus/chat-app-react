import { io } from "socket.io-client";
export const socket = io("http://localhost:9090", { transports: ['websocket'], upgrade: false });
