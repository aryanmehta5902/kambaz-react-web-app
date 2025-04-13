import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleTable from "./Table";
import * as coursesClient from "../client";

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchEnrolledUsers = async () => {
      if (cid) {
        const enrolledUsers = await coursesClient.findUsersForCourse(cid);
        setUsers(enrolledUsers);
      }
    };

    fetchEnrolledUsers();
  }, [cid]);

  return (
    <div>
      <h2>People</h2>
      <PeopleTable users={users} />
    </div>
  );
}