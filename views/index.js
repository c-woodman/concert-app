<html>
<head>
<style>
table, td, th {
border: 1px solid orange;
}
</style>
</head>
<body>
Here are the Concert locations and featured donuts: <br /><br />
<table>
<thead>
<th>Concert Location</th>
<th>Featured Donut</th>
</thead>
<% for (let iCount=0; iCount < aConcerts.length; iCount++) { %>
<tr>
<td><%= aConcerts[iCount].location %></td>
<td><%= aConcerts[iCount].featured_donut %></td>
</tr>
<% } %>
</table>
</body>
</html>
