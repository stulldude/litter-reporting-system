

export default interface LitterReport {
  // Required
  reportId: string; // Partition key
  reportTimestamp: string; // Sort Key (ISO 8601 format)

  litterStatus: "reported" | "cleaned"; // Status of the report: "reported" or "cleaned"
  trailName: string; // Optional: Human-readable name of the trail
  trailHead: string; // Required: ID of the trailhead where the litter was reported
  
  //Optionals
  coords?: { lat: number; lon: number }; // Required: Coordinates of the litter
  notes?: string; // Optional: Additional notes about the report
  photoS3Path?: string; // Optional S3 bucket path to the photo (optional)
  expirationTime?: number; // Optional: TTL for the report (Unix timestamp)

  user: User; // User object
}

interface User {
  userId: string; // Partition Key
  name?: string; // Optional: Name of the user
  email?: string; // Optional: Email of the user
  joinDate?: string; // Optional: ISO 8601 format date when the user joined
}
