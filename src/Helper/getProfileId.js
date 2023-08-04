import { client } from "../LensClient/client";
import { getDefaultProfileId } from "../LensClient/queries";
export async function getProfileId(address, dispatch) {
  const profileId = await client.query({
    query: getDefaultProfileId,
    variables: {
      request: {
        ethereumAddress: address,
      },
    },
  });
  if (profileId.data.defaultProfile) {
    dispatch({
      type: "SET_PROFILE_ID",
      payload: profileId.data.defaultProfile.id,
    });
  }
}