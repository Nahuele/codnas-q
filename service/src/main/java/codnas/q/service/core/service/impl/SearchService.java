package codnas.q.service.core.service.impl;

import codnas.q.service.core.model.Cluster;
import codnas.q.service.core.service.ISearchService;
import codnas.q.service.data.parser.ResultParser;
import codnas.q.service.data.repository.IClusterDAO;
import codnas.q.service.shared.dto.ResultDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService implements ISearchService {
    private final IClusterDAO clusterDAO;

    public SearchService(IClusterDAO clusterDAO) {
        this.clusterDAO = clusterDAO;
    }

    @Override
    public List<ResultDTO> getAllClusters() {
        try {
            List<ResultDTO> resultDTOS = new ArrayList<>();
            List<Cluster> clusters = clusterDAO.findAll();
            clusters.forEach(cluster -> {
                ResultDTO resultDTO = ResultParser.toResultDTO(cluster);
                resultDTOS.add(resultDTO);
            });
            return resultDTOS;
        } catch (Exception e) {
            return null;
        }
    }
}