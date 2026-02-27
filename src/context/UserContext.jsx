/*
 * FILE : UserContext.jsx
 * PROJECT : SENG3080 - Frontend Assignment
 * PROGRAMMER : Nicholas Aguilar
 * FIRST VERSION : 2026-02-22
 * DESCRIPTION : This file defines the UserContext creating the context object.
 */
import { createContext } from "react";
/*  As a note in case anyone is wondering, the context, provider and hook are in three separate files
    to help resolve warning around hot reloading when all three are in the same file
*/

export const UserContext = createContext(null);
