import React, { useState } from 'react';
import { Building, MapPin, FileText, Search, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { projects, getCategoryColor, getTypeColor, getCategories } from '../../data/projects';
import ProjectWatermark from "../../assets/images/watermark/home2.jpeg";

export function ProjectPage () {

  const [expandedProjects, setExpandedProjects] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = getCategories();

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesCategory;
  });

  const toggleExpanded = (projectId) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <div className="projects-container"
      style={{
        "--watermark": `url(${ProjectWatermark})`,
      }} 
    >
      <div className="projects-wrapper">
        {/* Header */}
        <div className="projects-header">
          <h1 className="projects-title">
            Our Projects
          </h1>
          <p className="projects-subtitle">
            Provided assistance in Construction and Consulting Services
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="controls-container">
          <div className="controls-wrapper">
            <div className="filter-container">
              <Filter className="filter-icon" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="results-count">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-content">
                <div className="project-header">
                  <div className="project-info">
                    <div className="client-info">
                      <Building className="building-icon" />
                      <h3 className="client-name">
                        {project.client}
                      </h3>
                    </div>
                    <div className="badges-container">
                      <span className={`badge ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <span className={`badge ${getTypeColor(project.type)}`}>
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExpanded(project.id)}
                    className="expand-button"
                  >
                    {expandedProjects.has(project.id) ? (
                      <ChevronUp className="chevron-icon" />
                    ) : (
                      <ChevronDown className="chevron-icon" />
                    )}
                  </button>
                </div>

                <div className={`project-details ${
                  expandedProjects.has(project.id) ? 'expanded' : 'collapsed'
                }`}>
                  <div className="project-title-container">
                    <FileText className="file-icon" />
                    <p className="project-title">
                      {project.title}
                    </p>
                  </div>
                  
                  <div className="location-container">
                    <MapPin className="map-icon" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {expandedProjects.has(project.id) && (
                <div className="expanded-details">
                  <div className="expanded-content">
                    <div className="details-grid">
                      <div className="detail-item">
                        <span className="detail-label">Project Type:</span>
                        <span className="detail-value">{project.type}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Service Category:</span>
                        <span className="detail-value">{project.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results">
            <div className="no-results-text">
              No projects found matching your search criteria.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}