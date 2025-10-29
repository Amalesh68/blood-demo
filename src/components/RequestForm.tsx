import React from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Card, CardContent } from '@mui/material';

const RequestForm: React.FC = () => {
    return (
        <Card className="shadow-lg">
            <CardContent className="p-8">
                 <form noValidate autoComplete="off">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField label="Patient Name" variant="outlined" fullWidth required />
                        <FormControl fullWidth required>
                            <InputLabel id="blood-group-label">Blood Group</InputLabel>
                            <Select
                                labelId="blood-group-label"
                                label="Blood Group"
                                defaultValue=""
                            >
                                <MenuItem value="A+">A+</MenuItem>
                                <MenuItem value="A-">A-</MenuItem>
                                <MenuItem value="B+">B+</MenuItem>
                                <MenuItem value="B-">B-</MenuItem>
                                <MenuItem value="AB+">AB+</MenuItem>
                                <MenuItem value="AB-">AB-</MenuItem>
                                <MenuItem value="O+">O+</MenuItem>
                                <MenuItem value="O-">O-</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField label="Contact Number" variant="outlined" fullWidth required />
                        <TextField label="Hospital Name" variant="outlined" fullWidth required />
                        <TextField 
                            label="Additional Details" 
                            variant="outlined" 
                            fullWidth 
                            multiline 
                            rows={4}
                            className="md:col-span-2"
                        />
                    </div>
                    <Button 
                        variant="contained" 
                        fullWidth 
                        size="large"
                        sx={{ mt: 4, backgroundColor: '#EF4444', '&:hover': { backgroundColor: '#DC2626' }, borderRadius: '9999px', paddingY: '0.75rem' }}
                        className="text-white font-semibold"
                    >
                        Submit Request
                    </Button>
                 </form>
            </CardContent>
        </Card>
    );
}

export default RequestForm;