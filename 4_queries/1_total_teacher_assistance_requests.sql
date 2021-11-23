SELECT COUNT(assistance_requests.*) AS total_assistances, name
FROM assistance_requests
JOIN teachers ON teachers.id = assistance_requests.teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY name;