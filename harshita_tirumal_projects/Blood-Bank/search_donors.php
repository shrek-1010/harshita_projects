<?php
include 'config/db.php'; // Database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $blood_group = $_POST['blood_group'];
    $city = $_POST['city'];

    $stmt = $conn->prepare("SELECT name, blood_group, city, email FROM donors WHERE blood_group = ? AND city = ?");
    $stmt->bind_param("ss", $blood_group, $city);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo '<div class="card">
                <div class="card-header">
                    <h4 class="mb-0"><i class="fas fa-users"></i> Matching Donors</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Blood Group</th>
                                    <th>City</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>';
        
        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>{$row['name']}</td>
                    <td><span class='badge bg-danger'>{$row['blood_group']}</span></td>
                    <td>{$row['city']}</td>
                    <td>
                        <button class='btn btn-primary btn-sm' onclick=\"openLoginPopup('{$row['email']}')\">
                            <i class='fas fa-paper-plane'></i> Send Request
                        </button>
                    </td>
                  </tr>";
        }
        
        echo '</tbody>
                        </table>
                    </div>
                </div>
            </div>';
    } else {
        echo '<div class="alert alert-info">
                <i class="fas fa-info-circle"></i> No donors found matching your criteria.
              </div>';
    }
    $stmt->close();
    $conn->close();
}
?>