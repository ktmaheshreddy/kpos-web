import React from "react";
function SideNavBar() {
  return (
    <div class="side-bar">
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li class="nav-item">
          <i class="bi bi-grid-3x3-gap-fill"></i>
          <br />
          <span>Dine in</span>
        </li>
        <li class="nav-item">
          <i class="bi bi-bag-heart-fill"></i>
          <br />
          <span>TakeAway</span>
        </li>
        <li class="nav-item">
          <i class="bi bi-speedometer2"></i>
          <br />
          <span>Dashboard</span>
        </li>
        <li class="nav-item">
          <i class="bi bi-graph-up-arrow"></i>
          <br />
          <span>Reports</span>
        </li>
      </ul>
    </div>
  );
}
export default SideNavBar;
