import React from "react";

enum AppAction {
  taskAdded = "tasks/added",
  taskFlagChanged = "tasks/flagChanged",
  taskRemoved = "tasks/removed",
  filtersSearched = "filters/searched",
  filtered = "filters/filtered"
}

export default AppAction