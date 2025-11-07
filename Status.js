export default function handler(request, response) {
  // --- Your logic to determine if the status is OK goes here ---
  // For testing, you can manually change this value:
  const isOk = true;
  // Try changing to: const isOk = false;
  // --- End of your logic ---

  if (isOk) {
    // If isOk is true, return a 200 OK status
    response.status(200).json({
      status: true,
    });
  } else {
    // If isOk is false, return a 401 Unauthorized status
    response.status(401).json({
      msg: "Please contact Mahmoud",
    });
  }
}
