const employees = [
    { name: 'David Carlson', age: 30 },
    { name: 'John Cena', age: 34 },
    { name: 'Mike Sheridan', age: 25 },
    { name: 'John Carte', age: 50 }
  ];
  
  const filteredEmployees = employees.filter(employee => employee.name.includes('John'));
  document.write(JSON.stringify(filteredEmployees));
  