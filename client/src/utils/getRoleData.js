const data = `
Hey Himanshu, suggested career or job for you is 
1. Software Engineer
Job Description of Software Engineer:
Software engineers are responsible for designing, developing, and maintaining software systems. They use their problem-solving skills to analyze user needs, design software solutions, and write code. They also collaborate with other team members to ensure the software meets quality standards and is delivered on time.

Roadmap to follow for Software Engineer:
a.) Obtain a Bachelor's degree in Computer Science or a related field.
b.) Gain hands-on experience by participating in coding competitions, internships, or open-source projects.
c.) Develop proficiency in programming languages such as Java, Python, or C++.
d.) Build a strong foundation in data structures and algorithms.
e.) Keep up with the latest industry trends and technologies by attending workshops, conferences, and online courses.

2. Web Developer
Job Description of Web Developer:
Web developers are responsible for designing and building websites. They use their coding skills to create user-friendly and visually appealing websites. They also ensure the website is responsive and optimized for different devices.

Roadmap to follow for Web Developer:
a.) Earn a degree in Computer Science, Web Development, or a related field.
b.) Learn HTML, CSS, and JavaScript to build the foundation of web development.
c.) Gain experience with front-end frameworks such as React or Angular.
d.) Familiarize yourself with back-end technologies such as Node.js or PHP.
e.) Build a portfolio of your web development projects to showcase your skills to potential employers.

3. Data Analyst
Job Description of Data Analyst:
Data analysts collect, analyze, and interpret large datasets to identify patterns, trends, and insights. They use their problem-solving skills and knowledge of statistical analysis to provide valuable insights to businesses and organizations.

Roadmap to follow for Data Analyst:
a.) Obtain a degree in Statistics, Mathematics, Computer Science, or a related field.
b.) Develop proficiency in statistical analysis tools such as R or Python.
c.) Learn data visualization techniques using tools like Tableau or Power BI.
d.) Gain experience with data querying languages such as SQL.
e.) Stay updated with the latest developments in data analysis through online courses and industry certifications.

Remember, these are just a few career options based on your interests and strengths. It's always a good idea to explore further and consider other factors such as personal preferences and market demand before making a final decision.
`;

export function getRoleData() {
    const res = [];
    let roles = data.split(/\d+\.\s/).slice(1);
    for (let role of roles) {
        const roleData = role.split("\n");
        res.push({name: roleData[0], description: roleData[2]})
    }
    return res;
}
