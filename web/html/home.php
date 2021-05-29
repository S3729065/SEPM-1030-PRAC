<!DOCTYPE html>
<html lang="en">
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js">// JQuery</script>
<!--Getting Started Bootstrap. [online] Available at: "https://getbootstrap.com/docs/3.4/getting-started/#download". [Accessed on: 19/04/21]-->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Home | Board</title>
</head>
<body>
	<main role="main" class="container">
		<div class="d-flex align-items-center p-3 my-3 text-dark bg-secondary rounded box-shadow">
			<div class="mb-0 text-dark lh-100">
				<img src="../imgs/image222.png" alt="Custom logo image by Daniel Surla" class="mr-3" width="32" height="32">
				<h1 class="mb-0 text-dark lh-100">Roster Calendar</h1>
				<p><i>Human Resource Management</i></p>
			</div>
		</div>
		<div class="my-p3 p-3 bg-white rounded box-shadow">
			<span>
				<label for="staff-member-name">
					<div class="media text-justify pt-3">
						<h1 class="media-body pb-3 mb-0 large lh-100">
							<strong class="d-block text-dark" id="staff-member-name">John Doe</strong>
						</h1>
					</div>
				</label>
			</span>

			<table class="table" id="notifs-table">
				<thead id="notifs-header">
					<tr>
						<th id="notifs-date">Date</th>
						<th id="notifs-time">Time</th>
						<th id="notifs-title">Title</th>
						<th id="notifs-msg">Message</th>
					</tr>
				</thead>

				<tbody>
					<?php
						$notifsJson = file_get_contents("../data/notifsHub.json");
						$notifsJsonDecoded = json_decode($notifsJson, true);
						$notfisRetvals = $notifsJsonDecoded["dateof"]["timeOf"]["titleOf"]["messageOf"];

						echo "<tr>";

						foreach ($notifsRetvals as $key => $value) {
							echo "<td>" . $key . "</td>";
							echo "<td>" . $value . "</td>";
						}

						echo "</tr>";
					?>
				</tbody>
			</table>

			<p id="egn"></p>

			<a href="./RosterAndAllocate.php" class="btn btn-lg btn-primary btn-block">To Roster</a>
		</main>
	</div>
</body>

<footer></footer>
</html>

<script type="text/javascript" src="../js/HomeController.js"></script>
<!-- <script>
$(document).ready(function () {
	var notifsTable = $('#notifs-table').DataTable({
			ordering: true,
			searching: false,
			select: false,

			ajax: "../data/notifsHub.json",
		})

	$('#notifs-table tbody').on('mouseenter', 'tr', function () {
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		}
		else {
			notifsTable.$('tr.active').removeClass('active');
			$(this).addClass('active');
		}
	})
})
</script> -->