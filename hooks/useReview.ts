import { useState } from "react";
import { Q } from "@nozbe/watermelondb";
import dayjs from "dayjs";

import { useDatabase } from "../contexts/databaseContext";
import Review from "../model/Review";

export function useReview() {
  const { database } = useDatabase();

  const today = dayjs().format("YYYY-MM-DD");

  async function getTodaysReview() {
    const [reviewCards, setReviewCards] = useState([]);

    const todaysReview = await database
      .get<Review>("reviews")
      .query(Q.where("due_date", Q.lt(today)))
      .fetch();
  }
}
