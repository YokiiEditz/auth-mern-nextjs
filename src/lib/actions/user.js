import User from "../models/user.mode";
import { connect } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  email_addresses,
  image_url,
  username
) => {
  try {
    await connect();

    const user = await User.findOneAndUpdate(
      {
        clerkId: id,
      },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          avatar: image_url,
          email: email_addresses[0].email,
          username: username,
        },
      },
      { new: true, upsert: true }
    );

    return user;
  } catch (error) {
    console.log("Error creating updated user:", error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connect();

    await User.findOneAndUpdate({
      clerkId: id,
    });
  } catch (error) {
    console.log("Error deleting user:", error);
  }
};
