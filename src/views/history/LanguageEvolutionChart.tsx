import React, {PureComponent} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {LanguageHierarchy, LanguageHierarchyObject} from '../../state';
import randomcolor from 'randomcolor';

export type HistoryGraphProps = {
  languageHierarchy?: LanguageHierarchyObject;
};

function toNumber(nr: unknown): number {
  return parseInt(nr?.toString ? nr.toString() : '9999', 10);
}

function createYearArray(languages: LanguageHierarchy, start = 1940) {
  const currentYear = new Date().getFullYear();
  const yearsArray = [];

  for (let year = start; year <= currentYear; year += 5) {
    yearsArray.push(year);
  }

  for (const languageCode in languages) {
    const languageData = languages[languageCode];
    const birthYear = toNumber(languageData?.birth?.toString());
    const deathYear = toNumber(languageData?.death?.toString());

    if (!isNaN(birthYear) && birthYear >= start) {
      yearsArray.push(birthYear);
    }

    if (!isNaN(deathYear) && deathYear >= start) {
      yearsArray.push(deathYear);
    }
  }

  return [...new Set([...yearsArray.sort((a, b) => a - b), currentYear])];
}

type LanguageData = {
  [key: string]: number;
};

function toChartData(years: number[], languages: LanguageHierarchy) {
  let languageData: LanguageData = {};
  return years.map((year) => {
    languageData = {...toLanguageData(year, languageData, languages)};
    return {
      year,
      ...languageData,
    };
  });
}

function toLanguageData(year: number, languageData: LanguageData, languagesObject: LanguageHierarchy) {
  const languagesUpToYear = Object.keys(languagesObject)
    .filter((language) => languagesObject?.[language]?.birth)
    .sort((a, b) => (languagesObject?.[a]?.birth < languagesObject?.[b]?.birth ? -1 : 1))
    .filter((language) => toNumber(languagesObject?.[language]?.birth) <= year)
    .map((language) => ({...languagesObject?.[language], language}));

  const startingPoint: Record<string, number> = {};

  languagesUpToYear.forEach((language) => {
    const valuesArray = Object.values(languageData);
    const incremented = ([0, ...valuesArray].sort((a, b) => (a < b ? -1 : 1)).pop() ?? 0) + 1;
    const lang = language.language;

    if (!languageData[lang]) {
      if (toNumber(languagesObject?.[lang]?.death) >= year) {
        languageData[lang] = !startingPoint[lang] ? incremented : startingPoint[lang];
      } else {
        languageData[lang] = 0;
      }
    } else {
      if (startingPoint[lang] && startingPoint[lang] === languageData[lang]) {
        // delete startingPoint[lang];
        languageData[lang] = incremented;
      }
    }

    languagesObject?.[lang]?.children?.forEach((l) => {
      startingPoint[l] = languageData[lang];
    });
  });

  return {...languageData};
}

function CustomTooltip({active, payload, connectionObject, languages}: any) {
  if (!connectionObject.stroke) {
    return null;
  }
  if (active && payload && payload.length) {
    const hoveredItems = payload.filter((p: any) => p.stroke === connectionObject.stroke); // Filter out languages with value 0.
    if (hoveredItems.length) {
      const languageName = hoveredItems[0].dataKey; // Get the data key which is the language name.
      const value = hoveredItems[0].value;

      return (
        <div className="custom-tooltip" style={{backgroundColor: '#f5f5f5', padding: '10px', border: '1px solid #ccc'}}>
          <p className="label">{`${languageName}: ${languages[languageName].birth}`}</p>
        </div>
      );
    }
  }

  return null;
}

export default function LanguageEvolutionChart({languageHierarchy}: HistoryGraphProps) {
  const years = createYearArray(languageHierarchy?.hierarchy ?? {}, 1970);
  const data = toChartData(years, languageHierarchy?.hierarchy ?? {});
  const connectionObject: Record<string, any> = {};

  const onLineMouseMove = (e: any) => {
    connectionObject.stroke = e.stroke;
  };

  return (
    <ResponsiveContainer width={800} height={400}>
      <LineChart width={800} height={400} data={data} syncMethod="value">
        <XAxis dataKey="year" />
        {/* <YAxis ticks={languages} domain={[0, languages.length - 1]} /> */}
        <Legend />
        <Tooltip
          content={<CustomTooltip languages={languageHierarchy?.hierarchy ?? {}} connectionObject={connectionObject} />}
        />
        {Object.keys(languageHierarchy?.hierarchy ?? {}).map((language) => (
          <Line
            type="monotone"
            dataKey={language}
            stroke={randomcolor()}
            strokeWidth={2}
            dot={false}
            activeDot={false}
            key={`line-${language}`}
            onMouseMove={onLineMouseMove}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
