import { Padding } from '@mui/icons-material';
import { Container, Paper, Typography, TextField, Button, Grid, List, ListItem, ListItemText, LinearProgress } from '@mui/material';
import { Formik, Field, Form, FormikValues } from 'formik';
import React from 'react';

export const Home = () => {
    const handleSubmit = (fields: any): React.FormEventHandler<HTMLFormElement> | undefined => {
        console.log("form handle submit", fields);
        return undefined;
    }

    return (
        <Container sx={{ mt: 3, padding: 3 }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Welcome to Splay Tech
                </Typography>

                <Typography paragraph>
                    At Splay Tech, we are dedicated to providing expert advice and
                    cutting-edge IT solutions to clients throughout Victoria and beyond. Our
                    mission is to empower businesses by leveraging innovative technologies,
                    ensuring they stay ahead in today's dynamic and competitive landscape.
                </Typography>

                <Typography variant="h5" sx={{ mt: 2 }}>
                    Who We Are
                </Typography>

                <Typography paragraph>
                    At the core of Splay Tech is a dedicated team of professionals with a
                    diverse skill set and a passion for excellence. We specialize in various
                    IT sectors, ensuring that our clients receive comprehensive and tailored
                    solutions to meet their unique needs.
                </Typography>

                <Typography variant="h5" sx={{ mt: 2 }}>
                    Our Expertise
                </Typography>

                <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                Frontend JS Frameworks
                            </Typography>
                            <Typography paragraph>
                                Our team excels in creating dynamic and responsive user interfaces
                                using the latest Frontend JavaScript frameworks. We bring your web
                                applications to life, providing an engaging and seamless user
                                experience.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                Microservices
                            </Typography>
                            <Typography paragraph>
                                Splay Tech embraces the power of microservices architecture,
                                enabling our clients to build scalable, flexible, and efficient
                                systems. Our expertise lies in designing and implementing
                                microservices solutions that drive business agility.
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* Add more expertise sections as needed */}
                </Grid>

                <Typography variant="h5" sx={{ mt: 2 }}>
                    Why Choose Splay Tech?
                </Typography>

                <List sx={{ mt: 2 }}>
                    <ListItem>
                        <ListItemText primary="Client-Centric Approach: We prioritize understanding your business goals and challenges to provide personalized solutions that align with your objectives." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Innovation and Technology Excellence: Stay at the forefront of technology with Splay Tech. We continuously invest in research and development to bring you the latest advancements in the IT industry." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Skilled and Experienced Team: Our team comprises seasoned professionals with in-depth expertise in their respective domains. We are committed to delivering high-quality results." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Global Reach: While we are rooted in Victoria, our reach extends beyond geographical boundaries. We cater to clients worldwide, bringing a global perspective to our services." />
                    </ListItem>
                </List>

                {/* "Let's get started" form */}
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>
                            Let's Get Started
                        </Typography>
                        <Typography paragraph>
                            Tell us about your project or ask any questions you may have. We're
                            here to help!
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                            }}
                            validate={(values) => {
                                const errors: Partial<FormikValues> = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false);
                                    alert(JSON.stringify(values, null, 2));
                                }, 500);
                            }}
                        >
                            {({ submitForm, isSubmitting }) => (
                                <Form>
                                    <Field
                                        component={TextField}
                                        name="email"
                                        type="email"
                                        label="Email"
                                    />
                                    <br />
                                    <Field
                                        component={TextField}
                                        type="password"
                                        label="Password"
                                        name="password"
                                    />
                                    {isSubmitting && <LinearProgress />}
                                    <br />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={isSubmitting}
                                        onClick={submitForm}
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}