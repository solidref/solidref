import React from 'react';
import {LanguageHierarchyObject} from '../state';
import LanguageEvolutionChart from './history/LanguageEvolutionChart';

export type HistoryProps = {
  languageHierarchy?: LanguageHierarchyObject;
};

// // Sample data based on the order of introduction of languages derived from C
// const data = [
//   {year: 1972, C: 1}, // C was introduced in 1972
//   {year: 1980, C: 1, Cpp: 1}, // C++ was introduced in 1980
//   {year: 1983, C: 1, Cpp: 2, ObjectiveC: 1}, // Objective-C was introduced in 1983
//   {year: 1990, C: 1, Cpp: 2, ObjectiveC: 3}, // Objective-C was introduced in 1983
//   {year: 2000, C: 1, Cpp: 2, ObjectiveC: 3}, // Objective-C was introduced in 1983
//   // ... continue for other languages
// ];

function History({languageHierarchy}: HistoryProps) {
  return <LanguageEvolutionChart languageHierarchy={languageHierarchy} />;
  // https://recharts.org/en-US/examples/TinyLineChart
  // return (
  //   <ResponsiveContainer width="100%" height="100%">
  //     <LineChart width={500} height={300} data={data}>
  //       <CartesianGrid strokeDasharray="3 3" />
  //       <XAxis dataKey="year" />

  //       <Legend />
  //       <Line type="monotone" dataKey="C" stroke="#8884d8" />
  //       <Line type="monotone" dataKey="Cpp" stroke="#82ca9d" />
  //       <Line type="monotone" dataKey="ObjectiveC" stroke="#ff7300" />
  //       {/* Add other lines for other languages */}
  //     </LineChart>
  //   </ResponsiveContainer>
  // );
}

export default History;
