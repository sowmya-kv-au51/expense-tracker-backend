import  express  from "express";
import {getUsers,createUser, loginUser} from "../controllers/users.js";
import {getExpenses, addExpenses, analyticsData, filteredAnalyticsData} from "../controllers/expense.js";

const router = express.Router();

router.get("/",getUsers);
router.post("/",createUser);
router.post("/login",loginUser);
router.get("/expenses", getExpenses);
router.get("/analytics", analyticsData);
router.get("/filteredAnalytics", filteredAnalyticsData);
router.post("/add-expenses", addExpenses);

export default router;