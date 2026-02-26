import React from "react";
import CardHeader from "@/components/shared/CardHeader";
import CardLoader from "@/components/shared/CardLoader";
import useCardTitleActions from "@/hooks/useCardTitleActions";

export const keywordVolumeData = [
  {
    id: 1,
    keyword: "custom software development services",
    intent: "informational",
    volume: "4,400",
    cpc: "19.59",
    competition: "10.0%",
    results: "316,000,000",
  },
  {
    id: 2,
    keyword: "managed it services near me",
    intent: "informational",
    volume: "12,100",
    cpc: "28.43",
    competition: "24.0%",
    results: "630,000,000",
  },
  {
    id: 3,
    keyword: "custom software development companies in singapore",
    intent: "informational",
    volume: "0",
    cpc: "0",
    competition: "0.0%",
    results: "0",
  },
  {
    id: 4,
    keyword: "What is IT strategy and planning?",
    intent: "informational",
    volume: "0",
    cpc: "0",
    competition: "0.0%",
    results: "0",
  },
];

const KeywordVolumeAnalysis = ({ title }) => {
  const {
    refreshKey,
    isRemoved,
    isExpanded,
    handleRefresh,
    handleExpand,
    handleDelete,
  } = useCardTitleActions();

  if (isRemoved) return null;

  return (
    <div className="col-lg-12">
      <div
        className={`card stretch stretch-full ${
          isExpanded ? "card-expand" : ""
        } ${refreshKey ? "card-loading" : ""}`}
      >
        {/* Header */}
        <div className="card-header d-flex justify-content-between align-items-center">
          <CardHeader
            title={title}
            refresh={handleRefresh}
            remove={handleDelete}
            expanded={handleExpand}
          />

          <span className="badge bg-light text-primary border">
            {keywordVolumeData.length} keywords
          </span>
        </div>

        {/* Table */}
        <div className="card-body custom-card-action p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th>Keyword</th>
                  <th>Intent</th>
                  <th>Search Volume</th>
                  <th>CPC</th>
                  <th>Competition</th>
                  <th>Results</th>
                </tr>
              </thead>
              <tbody>
                {keywordVolumeData.map((item) => (
                  <tr key={item.id}>
                    <td className="text-muted">{item.keyword}</td>

                    <td>
                      <span className="badge rounded-pill border border-primary text-primary bg-light">
                        {item.intent}
                      </span>
                    </td>

                    <td>{item.volume}</td>
                    <td>{item.cpc}</td>
                    <td>{item.competition}</td>
                    <td>{item.results}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer text-muted small">
          ✨ AI Generated Results
        </div>

        <CardLoader refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default KeywordVolumeAnalysis;
