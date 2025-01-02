import { createLitterReport } from '../services/litterService.ts';
import { useAuth } from "react-oidc-context";
import { v4 as uuidv4 } from 'uuid';
import LitterReport from '../types/LitterReport.ts';

type AuthContext = ReturnType<typeof useAuth>;

interface AuthenticatedViewProps {
  auth: AuthContext;
}

const reportId = uuidv4();
let localAuth;


const handleReportData = (formData) => {
    const reportData: LitterReport = {
        reportId: reportId,
        reportTimestamp: new Date().toISOString(),
        litterStatus: 'reported',

        trailName: formData.get('trailName'),
        trailHead: formData.get('trailHead'),

        notes: formData.get('notes'),
        photoS3Path: 's3://litter-report-bucket/photos/' + reportId,
        expirationTime: Date.now() + 1000 * 60 * 60 * 24 * 30, // 30 days from now
        user: {
            userId: '12345', //TODO
            name: 'Alice', //TODO
            email: '',
        }
    }
    return reportData;
}

const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const reportData: LitterReport = handleReportData(new FormData(form));
    console.log('Submitting report:', reportData);
    const response = await createLitterReport(reportData, localAuth);
    console.log('Response:', response);
    console.log(localAuth.user?.access_token);
    console.log(localAuth.user?.id_token);
}


const RecordForm: React.FC<AuthenticatedViewProps> = ({auth}) => {
    localAuth = auth;
    return <div>
        <h1>Record Litter</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="trailName">Trail Name:</label>
            <input type="text" id="trailName" name="trailName" required />
            <label htmlFor="trailHead">Trail Head:</label>
            <input type="text" id="trailHead" name="trailHead" required />
            <label htmlFor="notes">Notes:</label>
            <textarea id="notes" name="notes"></textarea>
            <label htmlFor="litterStatus">Litter Status:</label>
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" accept="image/*" />
            <button type="submit">Submit</button>
        </form>
    </div>;
}

export default RecordForm;